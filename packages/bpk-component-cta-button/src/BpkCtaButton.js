import React, { PropTypes } from 'react';
import BpkButton from 'bpk-component-button';

import { BpkSpinner, BpkLargeSpinner } from 'bpk-component-spinner';
import { withButtonAlignment, withLargeButtonAlignment } from 'bpk-component-icon';
import ArrowIconSm from 'bpk-component-icon/sm/long-arrow-right';
import ArrowIconLg from 'bpk-component-icon/lg/long-arrow-right';

import './bpk-cta-button.scss';


const getPropsIcon = (props) => {
  const {
    disabled,
    loading,
    selected,
    icon,
    iconSelected,
    iconDisabled,
    iconLoading,
  } = props;

  if (loading) {
    return iconLoading;
  } else if (disabled) {
    return iconDisabled;
  } else if (selected) {
    return iconSelected;
  }
  return icon;
};

const getSpinner = large => (
  large ?
    <BpkLargeSpinner alignToButton /> :
    <BpkSpinner alignToButton />
);

const getEnabledIcon = (large) => {
  const AlignedIcon = large ?
    withLargeButtonAlignment(ArrowIconLg) :
    withButtonAlignment(ArrowIconSm);
  return <AlignedIcon />;
};

const getDefaultIcon = (props) => {
  const {
    loading,
    large,
  } = props;

  if (loading) {
    return getSpinner(large);
  }
  return getEnabledIcon(large);
};

const BpkCtaButton = (props) => {
  const {
    children,
    className,
    disabled,
    loading,
    iconOnly,
    icon,
    iconSelected,
    iconDisabled,
    iconLoading,
    ...rest
  } = props;

  const showBtnDisabled = disabled || loading;

  const classNames = ['bpk-cta-button'];
  if (className) { classNames.push(className); }

  let ctaIcon = getPropsIcon(props);
  if (!ctaIcon) {
    ctaIcon = getDefaultIcon(props);
  }

  const spacer = (iconOnly) ? '' : '\u00A0';

  return (
    <BpkButton disabled={showBtnDisabled} iconOnly={iconOnly} className={classNames.join(' ')} {...rest}>
      {children}{spacer}{ctaIcon}
    </BpkButton>
  );
};

BpkCtaButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  secondary: PropTypes.bool,
  selected: PropTypes.bool,
  destructive: PropTypes.bool,
  large: PropTypes.bool,
  link: PropTypes.bool,
  iconOnly: PropTypes.bool,
  featured: PropTypes.bool,
  icon: PropTypes.element,
  iconSelected: PropTypes.element,
  iconDisabled: PropTypes.element,
  iconLoading: PropTypes.element,
};

BpkCtaButton.defaultProps = {
  href: null,
  className: null,
  disabled: false,
  loading: false,
  onClick: null,
  submit: false,
  secondary: false,
  selected: false,
  destructive: false,
  large: false,
  link: false,
  iconOnly: false,
  featured: false,
  icon: null,
  iconSelected: null,
  iconDisabled: null,
  iconLoading: null,
};

export default BpkCtaButton;