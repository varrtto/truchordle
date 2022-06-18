import AttemptDisplay from "./AttemptDisplay";

const AttemptsDisplay = () => {
  return (
    <div className="container is-fluid is-flex is-flex-direction-column mb-5">
      <AttemptDisplay line={0} />
      <AttemptDisplay line={1} />
      <AttemptDisplay line={2} />
      <AttemptDisplay line={3} />
      <AttemptDisplay line={4} />
    </div>
  );
};

export default AttemptsDisplay;
