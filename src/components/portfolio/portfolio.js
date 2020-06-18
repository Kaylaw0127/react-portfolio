import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button
} from "react-mdl";
import { Grid, Cell } from "react-mdl";

class Portfolio extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("contemporary_china.png")`,
          backgroundRepeat: "repeat",
          width: "100%",
          height: "100%",
          color: "white",
          overflow: "auto",
        }}
      >
      <div className="grid">
       <h1 className="header">Portfolio</h1>

        <Grid
          className="portfolio-grid"

        >
          <Cell col={4}>
            <Card
              shadow={0}
              style={{
                width: "320px",
                height: "320px",
                margin: "auto",
              }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background: "url(bug-out.png) center/ cover no-repeat",
                }}
              >
                Bug Out
              </CardTitle>
              {/* <CardText>
                    BUG OUT
                </CardText> */}
              <CardActions border>
                <Button colored href="https://bugouts.herokuapp.com/" target="_blank">
                  PREVIEW
                </Button>
                <Button colored href="https://github.com/Kaylaw0127/bug-out">
                  GITHUB
                </Button>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  border: "solid",
                  borderColor: "white",
                  background: "url(mealmate.png) center / cover no-repeat",
                }}
              >
                Meal Mate
              </CardTitle>
              {/* <CardText>
                    MEAL MATE INFO
                </CardText> */}
              <CardActions border>
                <Button
                  colored
                  href="https://meals-mates.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PREVIEW
                </Button>
                <Button
                  colored
                  href="https://github.com/Kaylaw0127/meal-mate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </Button>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background: "url(upabove.png) center / cover",
                }}
              >
                Up Above
              </CardTitle>
              {/* <CardText>
                    UP ABOVE
                </CardText> */}
              <CardActions border>
                <Button
                  colored
                  href="https://kaylaw0127.github.io/Up-Above/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PREVIEW
                </Button>
                <Button
                  colored
                  href="https://github.com/Kaylaw0127/Up-Above"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
        <Grid
          className="portfolio-grid"

        >
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background: "url(eatdaburgz.png) center /cover no-repeat",
                  marginBottom: "20px",
                }}
              >
                Burger Mania
              </CardTitle>
              {/* <CardText>
                    BURGER MANIA
                </CardText> */}
              <CardActions border>
                <Button
                  colored
                  href="https://eeatdaburgz.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PREVIEW
                </Button>
                <Button
                  colored
                  href="https://github.com/Kaylaw0127/burger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </Button>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background: "url(workday.png) center / cover no-repeat",
                }}
              >
                Day Planner
              </CardTitle>
              {/* <CardText>
                    Day Planner
                </CardText> */}
              <CardActions border>
                <Button
                  colored
                  href="https://kaylaw0127.github.io/day-planner/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PREVIEW
                </Button>
                <Button
                  colored
                  href="https://github.com/Kaylaw0127/day-planner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </Button>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background: "url(weather.png) center/ cover no-repeat",
                }}
              >
                Weather Dashboard
              </CardTitle>
              {/* <CardText>
                    WEATHER DASH
                </CardText> */}
              <CardActions border>
                <Button
                  colored
                  href="https://kaylaw0127.github.io/weather-dash/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PREVIEW
                </Button>
                <Button
                  colored
                  href="https://github.com/Kaylaw0127/weather-dash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
      </div>
    );
  }
}

export default Portfolio;
