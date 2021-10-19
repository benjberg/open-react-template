import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image 
            src={require('./../../../assets/images/logoFull.png')}
            alt="Open"
            width={200}
            height={250}
            tw="hidden md:flex"/>
            <Image 
            src={require('./../../../assets/images/logo.png')}
            alt="Open"
            width={50}
            height={50}
            tw="md:hidden"/>
        </Link>
      </h1>
    </div>
  );
}

export default Logo;