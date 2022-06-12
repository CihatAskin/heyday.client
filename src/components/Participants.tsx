import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { Option } from '../actions/types';
import { ActionMeta, OnChangeValue } from 'react-select';

const getFellows = (): Option[] => {
  let options: Option[] = [
    {
      value: '48932bc9-52a3-435e-b103-555d4afcddae',
      label: 'Ali',
      color: 'Red',
      isFixed: false,
      isDisabled: false,
    },
    {
      value: '3bd5723e-cc3f-44ac-a161-5d2115a2d220',
      label: 'Veli',
      color: 'Blue',
      isFixed: false,
      isDisabled: false,
    },
    {
      value: '40a3d554-8849-4a78-b063-568dabf5bd32',
      label: 'Ayşe',
      color: 'Yellow',
      isFixed: false,
      isDisabled: false,
    },
  ];
  console.log('istek gitti.');
  return options;
};

interface ParticipantsProps {
  userIds: string[];
  changeParticipants(users: string[]): void;
}

interface ParticipantsState {
  selectedUsers: Option[];
  options: Option[];
}

export default class Participants extends Component<
  ParticipantsProps,
  ParticipantsState
> {
  constructor(props: ParticipantsProps) {
    super(props);
    let options = getFellows();
    this.state = {
      selectedUsers: options.filter((x) =>
        this.props.userIds.includes(x.value)
      ),
      options,
    };
  }

  handleChange = (
    newValue: OnChangeValue<Option, true>,
    actionMeta: ActionMeta<Option>
  ) => {
    switch (actionMeta.action) {
      case 'pop-value':
        break;
      case 'clear':
        this.setState({ selectedUsers: [] }, () =>
          this.props.changeParticipants([])
        );
        break;
      case 'select-option':
      case 'remove-value':
        this.setState({selectedUsers: [...newValue]}, () =>
        this.props.changeParticipants(newValue.map(x=>x.value)));
        break;
      default:
        break;
    }
  };

  // shouldComponentUpdate(nextProps: any, nextState: ParticipantsState) {
  //   console.log(JSON.stringify(this.state));
  //   console.log(JSON.stringify(nextState));
  //   return false;
  // }

  render() {
    return (
      <CreatableSelect
        isMulti
        value={this.state.selectedUsers}
        onChange={this.handleChange}
        options={this.state.options}
      />
    );
  }
}
