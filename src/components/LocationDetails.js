function LocationDetails(props) {
  const { city, country, errorMessage } = props;

  /* LocationDetails.defaultProps = {
    errorMessage: ""
  } */ return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
}
export default LocationDetails;
