import React from 'react';
import DatePicker from './DatePicker';

const NUMBER_OF_MONTHS = 1;

export default ({ methods, format, startProps, endProps }) => {
  const startDateName = startProps.name;
  const endDateName = endProps.name;

  const [startDate, setStartDate] = React.useState(methods.getValues(startDateName));
  const [endDate, setEndDate] = React.useState(methods.getValues(endDateName));

  const reformatDate = (day) => {
    return new Date(day.getFullYear(), day.getMonth(), day.getDate());
  };

  const onClickStartDate = (value) => {
    methods.setValue(startDateName, reformatDate(value));
  };

  const onClickEndDate = (value) => methods.setValue(endDateName, reformatDate(value));

  const onUpdateDate = React.useCallback(() => {
    setStartDate(methods.getValues(startDateName));
    setEndDate(methods.getValues(endDateName));
  }, [methods, startDateName, endDateName]);

  React.useEffect(() => {
    onUpdateDate();
  }, [onUpdateDate]);

  return (
    <div className="items-end grid grid-cols-2 gap-4">
      <DatePicker
        name={startDateName}
        methods={methods}
        format={format}
        label={startProps.label}
        rules={startProps.rules}
        onDayChange={onUpdateDate}
        className="from-input"
        dayPickerProps={{
          selectedDays: [startDate, { from: startDate, to: endDate }],
          disabledDays: { after: endDate },
          toMonth: endDate,
          modifiers: { start: startDate, end: endDate },
          numberOfMonths: NUMBER_OF_MONTHS,
          onDayClick: onClickStartDate,
          ...startProps,
        }}
        {...startProps}
      />
      <DatePicker
        name={endDateName}
        methods={methods}
        format={format}
        label={endProps.label}
        rules={endProps.rules}
        onDayChange={onUpdateDate}
        className="to-input"
        dayPickerProps={{
          selectedDays: [startDate, { from: startDate, to: endDate }],
          disabledDays: { before: startDate },
          modifiers: { start: startDate, end: endDate },
          month: startDate,
          fromMonth: startDate,
          numberOfMonths: NUMBER_OF_MONTHS,
          onDayClick: onClickEndDate,
          ...endProps,
        }}
        {...endProps}
      />
    </div>
  );
};
