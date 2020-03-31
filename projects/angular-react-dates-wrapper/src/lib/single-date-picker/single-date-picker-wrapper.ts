import * as React from 'react';

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite/no-important';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';
ThemedStyleSheet.registerInterface(aphroditeInterface);

import { SingleDatePicker } from 'react-dates';
import { SingleDatePickerComponent } from './single-date-picker.component';
import * as moment_ from 'moment';

export class SingleDatePickerWrapper extends React.Component<any, any> {

  private ngComponent: SingleDatePickerComponent;

  constructor(props: any) {
    super(props);

    // React component state
    this.state = this.createState();

    // Bindings to angular context
    this.ngComponent = props.ngComponent;
    this.ngComponent.updateReactDate = this.updateReactDateFromNg;

    ThemedStyleSheet.registerTheme({
      reactDates: {
        ...DefaultTheme.reactDates,
        zIndex: 11000,
        color: {
          ...DefaultTheme.reactDates.color
        }
      },
    });

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.ngComponent.updateReactDate = this.ngComponent.updateReactDate.bind(this);
  }

  updateReactDateFromNg(date: any): void {
    // Update date
    const moment = moment_;
    const newDate: any = date ? moment(date) : null;
    this.onDateChange(newDate);
  }

  onDateChange(date: any): void {
    // Update this react component state
    this.setState({ date });

    // Update angular component container state
    this.ngComponent.value = date ? date.toDate() : null;
  }

  onFocusChange({ focused }: any): void {
    this.setState({ focused });
  }

  createState(): any {
    const moment = moment_;
    return {
      date: this.props.date ? moment(this.props.date) : null,
      focused: (this.props.focused != null) ? this.props.focused : false
    };
  }

  render(): any {
    const conf: any = {
      // Required
      // ...withStylesPropTypes,
      date: this.state.date,
      onDateChange: this.onDateChange,
      focused: this.state.focused,
      onFocusChange: this.onFocusChange,

      // Optional
      id: this.props.id,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      required: this.props.required,
      readOnly: this.props.readOnly,
      screenReaderInputMessage: this.props.screenReaderInputMessage,
      showClearDate: true,
      customCloseIcon: this.props.customCloseIcon,
      showDefaultInputIcon: this.props.showDefaultInputIcon,
      customInputIcon: this.props.customInputIcon,

      // renderMonth: this.props.renderMonth,
      orientation: this.props.orientation,
      anchorDirection: this.props.anchorDirection,
      horizontalMargin: this.props.horizontalMargin,
      withPortal: this.props.withPortal,
      withFullScreenPortal: this.props.withFullScreenPortal,
      initialVisibleMonth: this.props.initialVisibleMonth,
      firstDayOfWeek: this.props.firstDayOfWeek,
      numberOfMonths: this.props.numberOfMonths,
      keepOpenOnDateSelect: this.props.keepOpenOnDateSelect,
      reopenPickerOnClearDate: this.props.reopenPickerOnClearDate,
      renderCalendarInfo: this.props.renderCalendarInfo,
      hideKeyboardShortcutsPanel: this.props.hideKeyboardShortcutsPanel,
      daySize: this.props.daySize,
      isRTL: this.props.isRTL,

      navPrev: this.props.navPrev,
      navNext: this.props.navNext,
      onPrevMonthClick: this.props.onPrevMonthClick,
      onNextMonthClick: this.props.onNextMonthClick,
      onClose: this.props.onClose,

      // renderDay: this.props.renderDay,
      enableOutsideDays: this.props.enableOutsideDays,
      isDayBlocked: this.props.isDayBlocked,
      isOutsideRange: this.props.isOutsideRange,
      isDayHighlighted: this.props.isDayHighlighted,

      displayFormat: this.props.displayFormat,
      monthFormat: this.props.monthFormat,
      phrases: this.props.phrases,

      ariaLabel: this.props.ariaLabel,
      inputIconPosition: this.props.inputIconPosition,
      noBorder: this.props.noBorder,
      block: this.props.block,
      small: this.props.small,
      regular: this.props.regular,
      verticalSpacing: this.props.verticalSpacing,
      keepFocusOnInput: this.props.keepFocusOnInput,
      openDirection: this.props.openDirection,
      appendToBody: this.props.appendToBody,
      disableScroll: this.props.disableScroll,
      calendarInfoPosition: this.props.calendarInfoPosition,
      verticalHeight: this.props.verticalHeight,
      transitionDuration: this.props.transitionDuration,
      horizontalMonthPadding: this.props.horizontalMonthPadding,
      dayPickerNavigationInlineStyles: this.props.dayPickerNavigationInlineStyles,
      navPosition: this.props.navPosition,
      renderNavPrevButton: this.props.renderNavPrevButton,
      renderNavNextButton: this.props.renderNavNextButton,
      renderMonthText: this.props.renderMonthText,
      renderWeekHeaderElement: this.props.renderWeekHeaderElement,
      renderCalendarDay: this.props.renderCalendarDay,
      renderDayContents: this.props.renderDayContents,
      renderMonthElement: this.props.renderMonthElement,
      weekDayFormat: this.props.weekDayFormat,
      dayAriaLabelFormat: this.props.dayAriaLabelFormat
    };
    return React.createElement(SingleDatePicker, conf);
  }
}
