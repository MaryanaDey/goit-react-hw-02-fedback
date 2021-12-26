import React,{ Component } from "react";
import Section from "./Section";
import Controls from "./Controls";

class Feedback extends Component {
    static defaultProps = {
        initialValue: 0,
      };

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


      render () {
          return (
              <div>
                  <Section/>
                 
              </div>
          )
         
          
      }

}

export default Feedback;