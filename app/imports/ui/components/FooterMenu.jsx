import React from 'react';
import { Container, Grid, List, Input } from 'semantic-ui-react';


export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="grey-background">
          <Container>
            <Grid columns={3}>
              <Grid.Column>
                NAVIGATION
                <hr/>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                MAIN MENU
                <hr/>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                CONNECT
                <hr/>
                <div className="text">Sign up for the latest updates</div>
                <Input placeholder="Enter email address" label="join" labelPosition="right"/>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
