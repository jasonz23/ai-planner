import { SchedulerProps } from "../types";
import { useStore } from "../store";

const useScheduler = () => {
  const {
    handleState,
    selectedDate,
    disableViewNavigator,
    handleGotoDay,
    triggerDialog,
    triggerLoading,
    events,
    locale,
    resources,
    resourceViewMode,
    hourFormat,
    timeZone,
    view,
    height,
  } = useStore();

  const setEvents = (events: SchedulerProps["events"]) => {
    handleState(events, "events");
  };

  const setSelectedDate = (date: SchedulerProps["selectedDate"]) => {
    handleState(date, "selectedDate");
  };

  const setDisableViewNavigator = (
    disableViewNavigator: SchedulerProps["disableViewNavigator"]
  ) => {
    handleState(disableViewNavigator, "disableViewNavigator");
  };

  const setView = (view: SchedulerProps["view"]) => {
    handleState(view, "view");
  };

  const setResourceViewMode = (mode: SchedulerProps["resourceViewMode"]) => {
    handleState(mode, "resourceViewMode");
  };

  const setSchedulerLocale = (locale: SchedulerProps["locale"]) => {
    handleState(locale, "locale");
  };

  const serResources = (resources: SchedulerProps["resources"]) => {
    handleState(resources, "resources");
  };

  const setHourFormat = (format: SchedulerProps["hourFormat"]) => {
    handleState(format, "hourFormat");
  };

  const setTimeZone = (timeZone: SchedulerProps["timeZone"]) => {
    handleState(timeZone, "timeZone");
  };

  const setHeight = (height: SchedulerProps["height"]) => {
    handleState(height, "height");
  };

  const setDirection = (direction: SchedulerProps["direction"]) => {
    handleState(direction, "direction");
  };

  return {
    events,
    setEvents,
    disableViewNavigator,
    setDisableViewNavigator,
    selectedDate,
    setSelectedDate,
    goToDay: handleGotoDay,
    view,
    setView,
    schedulerLocale: locale,
    setSchedulerLocale,
    triggerDialog,
    resources,
    serResources,
    resourceViewMode,
    setResourceViewMode,
    hourFormat,
    setHourFormat,
    timeZone,
    setTimeZone,
    triggerLoading,
    height,
    setHeight,
    setDirection,
  };
};

export { useScheduler };