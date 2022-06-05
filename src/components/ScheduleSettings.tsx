import React, { Component } from 'react';
import Participants from '../components/Participants';

export default class ScheduleSettings extends Component {
  render() {
    return (
      <div className="w-full max-w-none">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              required
              id="title"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              maxLength={100}
              rows={10}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <span className="block text-gray-700 text-sm font-bold mb-2">
              Duration
            </span>
            <hr className='pt-3' />

            <div className="md:flex md:items-center mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="hours"
                >
                  Hours
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="hours"
                  type="number"
                  min={0}
                  max={23}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="minutes"
                >
                  Minutes
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="minutes"
                  type="number"
                  min={0}
                  max={60}
                  required
                />
              </div>
            </div>

          </div>
          <Participants/>
        </form>
      </div>
    );
  }
}
