
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Login from './Login';
Amplify.configure(awsExports);

export default function App() {
  return (
   <div>
   <p style={{textAlign:"center"}}> Hello welcome to Bella's Signature</p>
   <Login />
   </div>
  );
}