import CustomCalendar from "../components/CustomCalendar";
import AppDivider from "../components/appLayout/appDivider";
import AppFooter from "../components/appLayout/appFooter";
import AppHeader from "../components/appLayout/appHeader";
const Calendar = () => {
  return (
    <>
      <AppHeader />
      <AppDivider />
      <CustomCalendar />
      <AppFooter />
    </>
  );
};

export default Calendar;
