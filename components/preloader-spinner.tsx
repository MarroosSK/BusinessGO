import DotLoader from "react-spinners/DotLoader";
import { LengthType } from "react-spinners/helpers/props";

export const PreloaderSpinner = (props: {
  color: string;
  size: LengthType;
}) => {
  return (
    <DotLoader {...props} aria-label="Loading Spinner" data-testid="loader" />
  );
};
