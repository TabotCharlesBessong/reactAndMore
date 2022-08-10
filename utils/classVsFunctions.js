//  component didmount equivalent in react hooks
useEffect(() => {
  // Your code here
}, [])

// component didupdate equivalent in react hooks
useEffect(() => {
  // Your code here
}, [yourDependency]);

// component will unmount equivalent in react hooks
useEffect(() => {
  // componentWillUnmount
  return () => {
     // Your code here
  }
}, [yourDependency]);
