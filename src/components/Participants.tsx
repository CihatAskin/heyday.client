import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { Option } from '../actions/types';
import { ActionMeta, OnChangeValue } from 'react-select';

const getFellows = (): Option[] => {
  let options: Option[] = [
    {
      value: '1',
      label: 'Ali',
      color: 'Red',
      isFixed: false,
      isDisabled: false,
    },
    {
      value: '2',
      label: 'Veli',
      color: 'Blue',
      isFixed: false,
      isDisabled: false,
    },
    {
      value: '3',
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
  id: string;
  title: string;
}

interface ParticipantsState {
  selectedUsers: Option[];
}

export default class Participants extends Component<{}, ParticipantsState> {
  constructor(props: ParticipantsState) {
    super(props);

    this.state = {
      selectedUsers: [],
    };
  }

  handleChange = (
    newValue: OnChangeValue<Option, true>,
    actionMeta: ActionMeta<Option>
  ) => {

    switch (actionMeta.action) {
      case 'remove-value':
      case 'pop-value':      
        break;
      case 'clear':
        this.setState({
          selectedUsers: [],
        });
        break;
      case 'select-option':
        this.setState({
          selectedUsers: [...newValue],
        });
        break;
      default:
        break;
    }
  };

  shouldComponentUpdate(nextProps: any, nextState: ParticipantsState) {
    console.log(JSON.stringify(this.state));
    console.log(JSON.stringify(nextState));
    return false;
  }

  render() {
    return (
      <CreatableSelect
        isMulti
        onChange={this.handleChange}
        options={getFellows()}
      />
    );
  }
}
