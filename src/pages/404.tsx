import React, { VoidFunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';

const NotFoundPage: VoidFunctionComponent = () => <Redirect to="/" />;

export default NotFoundPage;
