import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook,  useSelector} from "react-redux";
import counterSlice from "./counter/counterSlice";
import pokemonSlice from "./pokemon/pokemonSlice";
import { localStorageMiddleware } from "./middlewares/localstorage-middelware";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
