import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";


class Portfolio extends Component {
    render() {
        return (
       <div className="container">
           <div className="row">
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url() center/ cover no-repeat #46B6AC'}}>Bug Out</CardTitle>
                {/* <CardText>
                    BUG OUT
                </CardText> */}
                <CardActions border>
                <Button
                colored
                href="" target="_blank">
                PREVIEW
              </Button>
              <Button colored href="">
                GITHUB
              </Button>
                </CardActions>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(mealmate.png) center / cover no-repeat'}}>Meal Mate</CardTitle>
                {/* <CardText>
                    MEAL MATE INFO
                </CardText> */}
                <CardActions border>
                <Button
                colored
                href="https://meals-mates.herokuapp.com/" target="_blank">
                PREVIEW
              </Button>
              <Button colored href="https://github.com/Kaylaw0127/meal-mate">
                GITHUB
              </Button>
                </CardActions>
                </Card>
             </div>

             <div className="row">
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(upabove.png) center / cover'}}>Up Above</CardTitle>
                {/* <CardText>
                    UP ABOVE
                </CardText> */}
                <CardActions border>
                <Button
                colored
                href="https://kaylaw0127.github.io/Up-Above/" target="_blank">
                PREVIEW
              </Button>
              <Button colored href="https://github.com/Kaylaw0127/Up-Above">
                GITHUB
              </Button>
                </CardActions>
                </Card>
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(eatdaburgz.png) center /cover no-repeat'}}>Burger Mania</CardTitle>
                {/* <CardText>
                    BURGER MANIA
                </CardText> */}
                <CardActions border>
                <Button
                colored
                href="https://eeatdaburgz.herokuapp.com/" target="_blank">
                PREVIEW
              </Button>
              <Button colored href="https://github.com/Kaylaw0127/burger">
                GITHUB
              </Button>
                </CardActions>
                </Card>
            </div>
            <div className="row">
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(workday.png) center / cover no-repeat'}}>Day Planner</CardTitle>
                {/* <CardText>
                    Day Planner
                </CardText> */}
                <CardActions border>
                <Button
                colored
                href="https://kaylaw0127.github.io/day-planner/" target="_blank">
                PREVIEW
              </Button>
              <Button colored href="https://github.com/Kaylaw0127/day-planner">
                GITHUB
              </Button>
                </CardActions>
                </Card>
        
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(weather.png) center/ cover no-repeat'}}>Weather Dashboard</CardTitle>
                {/* <CardText>
                    WEATHER DASH
                </CardText> */}
                <CardActions border>
                <Button
                colored
                href="https://kaylaw0127.github.io/weather-dash/" target="_blank">
                PREVIEW
              </Button>
              <Button colored href="https://github.com/Kaylaw0127/weather-dash">
                GITHUB
              </Button>
                </CardActions>
                </Card>
            
            </div>
        </div>
        )}
}

export default Portfolio;