import FirstCol from "./col-components/FirstCol";
import SecondCol from "./col-components/SecondCol";
import ThirdCol from "./col-components/ThirdCol";
import FourthCol from "./col-components/FourthCol";
import FifthCol from "./col-components/FifthCol";
import SixthCol from "./col-components/SixthCol";
import SeventhCol from "./col-components/SeventhCol";

export const columnData = [
  {
    component: FirstCol,
    props: {
      seatPlan,
      getUserInfo,
      currentTime,
      reservationsAM,
      reservationsPM,
      setShowTimeTablePage,
      setSeatId,
    },
  },
  {
    component: SecondCol,
    props: {
      seatPlan,
      getUserInfo,
      currentTime,
      reservationsAM,
      reservationsPM,
      setShowTimeTablePage,
      setSeatId,
    },
  },

  {
    component: ThirdCol,
    props: {
      seatPlan,
      getUserInfo,
      currentTime,
      reservationsAM,
      reservationsPM,
      setShowTimeTablePage,
      setSeatId,
    },
  },
  {
    component: FourthCol,
    props: {
      seatPlan,
      getUserInfo,
      currentTime,
      reservationsAM,
      reservationsPM,
      setShowTimeTablePage,
      setSeatId,
    },
  },
  {
    component: FifthCol,
    props: {
      seatPlan,
      getUserInfo,
      currentTime,
      reservationsAM,
      reservationsPM,
      setShowTimeTablePage,
      setSeatId,
    },
  },
  {
    component: SixthCol,
    props: {
      seatPlan,
      getUserInfo,
      currentTime,
      reservationsAM,
      reservationsPM,
      setShowTimeTablePage,
      setSeatId,
    },
  },
  {
    component: SeventhCol,
    props: {
      seatPlan,
      getUserInfo,
      currentTime,
      reservationsAM,
      reservationsPM,
      setShowTimeTablePage,
      setSeatId,
    },
  },
  // Add more objects for other columns as needed
];
