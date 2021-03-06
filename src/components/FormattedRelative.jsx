import React, { Component } from 'react';
import { filterFormatOptions } from './Utils';


export default class FormattedRelative extends Component {
    static contextTypes = {
    	intl: React.PropTypes.object
    };

    static formatOptions : Array< string > = [
        'style', 'units'
    ];

    static propTypes = {
        format  : React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.object
        ]),
        value : React.PropTypes.any.isRequired,
        now   : React.PropTypes.any
    };

    static defaultProps = {
        tagName: 'span'
    };

    render() {
        const { tagName, value, format, now, className } = this.props;

        const defaults = format && this.context.intl.getFormat('relative', format);
        const options  = filterFormatOptions( this.props, FormattedRelative.formatOptions, defaults );

        const formattedRelativeTime = this.context.intl.formatRelative( value, options, {
            now
        } );

        return React.createElement( tagName, { className }, formattedRelativeTime );
    }
}
