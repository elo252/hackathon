import React from "react";

import Select from "react-select";

const icecreams = [
  { value: "artist", label: "Artist" },
  { value: "bakeshop", label: "Bakeshop" },
  { value: "basketball", label: "Basketball" },
  { value: "catering-service", label: "Catering Service" },
  { value: "clothing", label: "Clothing" },
  { value: "flower-shop", label: "Flower Shop" },
];

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? "red"
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "white"
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? data.color : "green"),
      },
    };
  },
};

class SelectDropDownComponent extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <h5>Multiple SelectBox with Search</h5> */}
            <Select
              value={selectedOption}
              isMulti="true"
              isSearchable="true"
              onChange={this.handleChange}
              options={icecreams}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectDropDownComponent;
