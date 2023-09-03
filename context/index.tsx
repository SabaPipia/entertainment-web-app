import React, { createContext, useContext, useEffect, useReducer } from "react";
import { DataTypes } from "@/types";
import { dataContext } from "@/app/layout";

export interface InitialShows {
  shows: DataTypes[];
}

type Action = {
  type: string;
  task: {
    id: string;
  };
  data: DataTypes[];
};

const showItemReducer = (state: InitialShows, action: Action): InitialShows => {
  switch (action.type) {
    case "bookmark": {
      const updatedShows = action.data.map((item) => {
        if (item.title === action.task.id) {
          return { ...item, isBookmarked: !item.isBookmarked };
        } else {
          return item;
        }
      });
      return { ...state, shows: updatedShows };
    }
    default:
      return state;
  }
};

const ShowContext = createContext<InitialShows | null>(null);
const ShowsDispatchContext = createContext<React.Dispatch<Action>>(() => {});

export function useShows() {
  return useContext(ShowContext);
}

export function useDispatch() {
  return useContext(ShowsDispatchContext);
}

interface ShowsContextProviderProps {
  children: React.ReactNode;
}

const ShowsContextProvider: React.FC<ShowsContextProviderProps> = ({
  children,
}) => {
  const context = useContext(dataContext);
  const initialData: InitialShows = {
    shows: context?.data || [],
  };
  const [showsState, dispatch] = useReducer(showItemReducer, initialData);

  useEffect(() => {
    context?.setData(showsState.shows);
  }, [showsState.shows, context.setData]);

  return (
    <ShowContext.Provider value={showsState}>
      <ShowsDispatchContext.Provider value={dispatch}>
        {children}
      </ShowsDispatchContext.Provider>
    </ShowContext.Provider>
  );
};

export default ShowsContextProvider;
