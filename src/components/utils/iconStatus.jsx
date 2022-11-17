import { ENUM_STATUS } from "../../store/store";

export const iconStatus = (status) => {
    switch (status) {
      case ENUM_STATUS.SUCCESS:
        return <i className="bi bi-check"></i>;
      case ENUM_STATUS.DANGER:
        return <i className="bi bi-x-octagon-fill"></i>;
      case ENUM_STATUS.WARNING:
        return <i className="bi bi-exclamation-triangle"></i>;
        default:
          return <></>;
    }
  };