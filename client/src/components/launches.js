import React ,{Component , Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './launchItem';
import MissionKey from './missionKey';

const Launches_Query = gql`
{
  launches{
    flight_number
    mission_name
    launch_date_local
    launch_success
  }
}
`

class Launches extends Component {
  render(){
  return (

    <Fragment>
    <h3 className = 'display-4 my-3'> Launches </h3>
    <MissionKey />
    <Query query={Launches_Query}>
    {
      function({loading , error , data}){
        if(loading) return <h4>Loading...</h4>;
        if(error) console.log(error) ; 
        return (
          <Fragment>
            {
              data.launches.map(launch => (
                <LaunchItem 
                key={launch.flight_number} 
                launch={launch}
                />
              ))
            }
          </Fragment>
          );
      }
    }
    </Query>
    </Fragment>
    
  );
}
}

export default Launches;
