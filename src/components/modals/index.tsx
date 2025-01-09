import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./authorization-modals";

const Modals = () => {
  const { authorizationModalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );
  return <>{authorizationModalVisibility && <AuthorizationModal />}</>;
};

export default Modals;
