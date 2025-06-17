import ReactGA from "react-ga4";

const initGA = (measurementID) => {
    ReactGA.initialize(measurementID);
};

const logPageView = (path) => {
    ReactGA.send({ hitType: 'pageview', page: path });
};

export { initGA, logPageView };
