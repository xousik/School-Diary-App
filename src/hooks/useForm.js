// import { useReducer } from 'react';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INPUT CHANGE':
//       return {
//         ...state,
//         [action.field]: action.value,
//       };
//     case 'CLEAR VALUES':
//       return {
//         ...action.initialValues,
//       };
//     case 'CONSENT TOGGLE':
//       return {
//         ...state,
//         consent: !state.consent,
//       };
//     case 'THROW ERROR':
//       return {
//         ...state,
//         error: action.errorValue,
//       };
//     default:
//       return state;
//   }
// };

// export const useForm = (initialValues) => {
//   const [formValues, dispatch] = useReducer(reducer, initialValues);

//   const handleInputChange = (e) => {
//     dispatch({
//       type: 'INPUT CHANGE',
//       field: e.target.name,
//       value: e.target.value,
//     });
//   };

//   const handleClearForm = () => {
//     dispatch({ type: 'CLEAR VALUES', initialValues });
//   };

//   const handleThrowError = (errorMessage) => {
//     dispatch({ type: 'THROW ERROR', errorValue: errorMessage });
//   };

//   const handleToggleConsent = () => {
//     dispatch({ type: 'CONSENT TOGGLE' });
//   };

//   return {
//     formValues,
//     handleInputChange,
//     handleClearForm,
//     handleThrowError,
//     handleToggleConsent,
//   };
// };
