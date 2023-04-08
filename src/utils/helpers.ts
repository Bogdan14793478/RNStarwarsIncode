// type ActionSetState<T> = {
//   type: 'SET_STATE';
//   payload: T;
// };

// export const validateEmail = (
//   text: string,
//   setState: React.Dispatch<ActionSetState<string>>,
// ) => {
//   console.log(text);
//   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
//   if (reg.test(text) === false) {
//     console.log('Email is Not Correct');
//     setState((prevState: string) => text);
//     return false;
//   } else {
//     setState((prevState: string) => text);
//     console.log('Email is Correct');
//   }
// };
