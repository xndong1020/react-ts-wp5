/* eslint-disable */
import React, { createContext, memo, useState } from 'react';

export interface ICreateAccountContext {
  currentStep: number;
  handleChangeCurrentStep: (currentStep: number) => void;
  country: string;
  companyName?: string;
  email?: string;
}

const initCreateAccountContextValues: ICreateAccountContext = {
  currentStep: 1,
  handleChangeCurrentStep: (currentStep: number) => {},
  country: 'Australia'
};

export const CreateAccountContext = createContext<ICreateAccountContext>(
  initCreateAccountContextValues
);

export const CreateAccountContextProvider = memo(
  ({ children }: { children: any }): JSX.Element => {
    const handleChangeCurrentStep = (currentStep: number) => {
      console.log('handleChangeCurrentStep currentStep', currentStep);
      setState((prevState: ICreateAccountContext) => ({
        ...prevState,
        currentStep
      }));
    };
    const [state, setState] = useState({
      currentStep: 1,
      country: 'Australia',
      handleChangeCurrentStep
    } as ICreateAccountContext);

    return (
      <CreateAccountContext.Provider value={state}>
        {children}
      </CreateAccountContext.Provider>
    );
  }
);
