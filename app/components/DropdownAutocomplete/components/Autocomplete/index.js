import React, { Component, Fragment } from "react";
import {
  findNodeHandle,
  ActivityIndicator,
  TextInput,
  View
} from "react-native";
import { string, bool, number, func, array } from "prop-types";
import Dropdown from "../Dropdown";
import { capitalizeFirstLetter } from "../../utils/string";
import { styles } from "./Autocomplete.styles";
import { get } from "../../utils/api";
import { WAIT_INTERVAL, NO_DATA } from "../../constants/Autocomplete";
import { theme } from "../../constants/Theme";
import locales from "../../constants/Locales";

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.inputValue,
      loading: false,
      filteredItems: []
    };
    this.mounted = false;
    this.timer = null;
    this.dropdown = React.createRef();
    this.container = React.createRef();
    this.setItem = this.setItem.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.promisifySetState = this.promisifySetState.bind(this);
  }

  updateIncomingText(text) {
    this.setState({ inputValue: text });
  }

  handleInputChange(text) {
    if (text.trim() == "") {
      const { handleSelectItem } = this.props;
      handleSelectItem("");
    }
    const { minimumCharactersCount, waitInterval } = this.props;
    clearTimeout(this.timer);
    this.setState({ inputValue: text });
    if (text.length > minimumCharactersCount) {
      this.setState(
        {
          loading: true
        },
        () => {
          if (this.mounted) {
            this.timer = setTimeout(this.triggerChange, waitInterval);
          }
        }
      );
    } else {
      this.setState({ loading: false });
    }
  }

  promisifySetState(state) {
    return (
      this.mounted &&
      new Promise(resolve => this.setState(state, () => resolve()))
    );
  }

  async triggerChange() {
    const { inputValue } = this.state;
    const { data } = this.props;

    const { fetchDataUrl, valueExtractor, rightTextExtractor } = this.props;
    if (fetchDataUrl) {
      try {
        const response = await get(fetchDataUrl, { search: inputValue });
        if (response.length && this.mounted) {
          console.log("RES", response);

          this.setState({ data: response, loading: false });
        } else {
          this.setState({ data: [NO_DATA], loading: false });
        }
        if (this.dropdown) {
          this.dropdown.onPress(this.container);
        }
      } catch (error) {
        throw new Error(error);
      }
    } else {
      const filteredItems = data.filter(item => {
        return (
          valueExtractor(item)
            .toLowerCase()
            .search(inputValue.toLowerCase()) !== -1 ||
          rightTextExtractor(item)
            .toLowerCase()
            .search(inputValue.toLowerCase()) !== -1
        );
      });

      if (filteredItems.length && this.mounted) {
        let firstLatter = inputValue.charAt(0);
        await this.promisifySetState({
          filteredItems,
          loading: false
        });
      } else {
        await this.promisifySetState({
          filteredItems: [NO_DATA],
          loading: false
        });
      }

      if (this.dropdown) {
        this.dropdown.onPress(this.container);
      }
    }
  }

  setItem(value) {
    const {
      index,
      handleSelectItem,
      valueExtractor,
      resetOnSelect
    } = this.props;
    handleSelectItem(value, index);

    if (resetOnSelect) {
      this.setState({ inputValue: "" });
    } else {
      const capitalizedValue = capitalizeFirstLetter(valueExtractor(value));
      this.setState({ inputValue: capitalizedValue });
    }
  }

  componentDidMount() {
    const { data } = this.props;
    this.mounted = true;
    if (data) {
      this.setState({ items: data });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.mounted = false;
  }

  handleBlur() {
    clearTimeout(this.timer);
    this.setState({ loading: false });
  }

  render() {
    const { inputValue, loading, filteredItems } = this.state;
    const {
      placeholder,
      scrollToInput,
      renderIcon,
      inputContainerStyle,
      inputStyle,
      spinnerStyle,
      spinnerSize,
      listHeader,
      autoCorrect,
      spinnerColor,
      placeholderColor,
      data,
      isTextInput,
      ...dropdownProps
    } = this.props;

    return (
      <Fragment>
        <View style={[styles.inputContainerStyle, inputContainerStyle]}>
          {loading && (
            <ActivityIndicator
              style={[styles.spinner, spinnerStyle]}
              size={spinnerSize}
              color={spinnerColor || theme.primary}
            />
          )}
          <TextInput
            ref={ref => {
              this.container = ref;
            }}
            editable = {isTextInput}
            onBlur={event => this.handleBlur(event)}
            style={[styles.input, inputStyle]}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor || theme.textSecondary}
            value={inputValue}
            autoCorrect={autoCorrect}
            onChangeText={text => this.handleInputChange(text)}
            onFocus={event => {
              scrollToInput(findNodeHandle(event.target));
            }}
          />
          {renderIcon()}
        </View>
        {data && data.length > 0 && (
          <Dropdown
            ref={ref => {
              this.dropdown = ref;
            }}
            dropdownPosition={0}
            data={data ? filteredItems : data}
            listHeader={listHeader}
            inputValue={inputValue}
            onChangeValue={this.setItem}
            {...dropdownProps}
          />
        )}
      </Fragment>
    );
  }
}

Autocomplete.defaultProps = {
  placeholder: locales.components.Autocomplete.placeholder,
  spinnerSize: "small",
  autoCorrect: false,
  minimumCharactersCount: 2,
  highlightText: true,
  waitInterval: WAIT_INTERVAL,
  resetOnSelect: false,
  data: [],
  inputValue: "",
  isTextInput: true
};

Autocomplete.propTypes = {
  placeholder: string,
  spinnerSize: string,
  listHeader: string,
  inputValue: string,
  placeholderColor: string,
  fetchDataUrl: string,
  minimumCharactersCount: number,
  waitInterval: number,
  highlightText: bool,
  rightContent: bool,
  autoCorrect: bool,
  resetOnSelect: bool,

  valueExtractor: func,
  renderIcon: func,
  scrollToInput: func.isRequired,
  handleSelectItem: func.isRequired,
  onDropdownClose: func.isRequired,
  onDropdownShow: func.isRequired,
  rightTextExtractor: func,
  data: array,
  isTextInput: bool
};

export default Autocomplete;
