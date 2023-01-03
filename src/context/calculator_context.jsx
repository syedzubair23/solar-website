import { createContext, useReducer, useContext } from "react";
import reducer from "../reducer/calculatorReducer";

const initial_options = [
    {
      id: 'spc1',
      title: "solar_company",
      options: 'CanadianSolar',
    },
    {
      id: 'st1',
      title: "solar_technology",
      options: 'Mono-Perc Halfcut',
    },
    {
      id: 'pwr1',
      title: "solar_rating",
      options: '370 watt',
    },
    {
      id: 1,
      title: "no_of_plates",
      options: 4
    },
    {
      id: 'ic1',
      title: "inverter_company",
      options: 'Inverex',
    },
    {
      id: 'ikr1',
      title: "inverter_rating",
      options: '1.5kw',
    },
    {
      id: 'ms1',
      title: "mounting_structure",
      options: 'L2 Galvanized Iron',
    },
    {
      id: 'bt1',
      title: "battery_type",
      options: 'Tubular',
    },
    {
      id: 'bc1',
      title: "battery_company",
      options: 'Phoenix',
    },
    {
      id: 'ba1',
      title: "battery_ampere",
      options: '185AH',
    },
  ]

const CalculatorContext = createContext();

const initialState = {
    val: initial_options
}

const CalculatorProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const selectOption = (val) => {
        dispatch({ type: "SELECT_OPTION", payload: { val }})
    }

    return (
        <CalculatorContext.Provider value={{...state, selectOption}}>
            {children}
        </CalculatorContext.Provider>
    )
}

const useCalculatorContext = () => useContext(CalculatorContext);

export { CalculatorProvider, useCalculatorContext }