import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* title */}
        <Typography className="infoBox__title">{title}</Typography>

        {/* Nubmer of cases */}
        <h2 className="infoBox__cases">{cases}</h2>

        {/* 1.2mil total*/}
        <Typography className="infoBox__total" color="textSecondary">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
