import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { MoedaRequest, infRequest } from "../../store/ducks/moeda/actions";
import { MoedasMundo, DataMoeda, Inf } from "../../store/ducks/moeda/types";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import useStyles from "./style";
import Copyright from "./Copyright";
import Image from "../../image/img.jpg";

const Cards = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const moedas = useSelector((state: MoedasMundo) => state.moedasMundo.moedas);

  const information = useSelector(
    (state: MoedasMundo) => state.moedasMundo.inf
  );

  const inf = (inf: any) => {
    dispatch(infRequest(inf));
  };

  useEffect(() => {
    dispatch(MoedaRequest());
  }, [dispatch]);

  return (
    <div>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {moedas !== null &&
              moedas.map((item: DataMoeda, i: any) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={Image}
                      title={item.country_name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.currency_code}
                      </Typography>
                      <Typography>{item.name}</Typography>

                      {information !== null &&
                        information.map((n: Inf, i: any) => (
                          <div key={i}>
                            <Typography>
                              {item.currency_code === n.currency_code && n.name}
                            </Typography>

                            <Typography>
                              {item.currency_code === n.currency_code &&
                                n.symbol}
                            </Typography>
                          </div>
                        ))}
                    </CardContent>

                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => inf(item.currency_code)}
                      >
                        information
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          https://v2.api.forex/infos/currencies.json
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
};

export default Cards;
