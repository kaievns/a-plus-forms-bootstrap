import React from 'react';

const randomId = () =>
  `input-${Math.random()
    .toString(16)
    .slice(2, 8)}`;

export default ({ label, error, input, help, id = randomId() }) => {
  const isCheckbox = input.type.toString().includes('Checkbox');

  return (
    <div className={`form-group${error ? ' has-error' : ''} row`}>
      <label className="col-sm-3 control-label" htmlFor={id}>
        {isCheckbox ? null : label}
      </label>
      <div className={`col-sm-9${isCheckbox ? ' checkbox' : ''}`}>
        {React.cloneElement(input, {
          id,
          help: undefined,
          className: isCheckbox ? null : 'form-control'
        })}
      </div>
      {help ? <small className="help-block col-sm-9 col-sm-offset-3">{help}</small> : null}
      {error ? <small className="text-danger col-sm-9 col-sm-offset-3">{error}</small> : null}
    </div>
  );
};
