import React from "react";
import VisibilitySensor from "react-visibility-sensor";

export default class FadeInWhenVisible extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: 0 };
    }

    onChange(isVisible) {
        if (isVisible && this.state.visible === 0) {
            setTimeout(() => {
                this.setState({ visible: 1 });
            }, 250);
        }
    }

    render() {
        return (
            <>
                <VisibilitySensor
                    partialVisibility
                    onChange={this.onChange.bind(this)}
                >
                    <div
                        style={{
                            opacity: this.state.visible,
                        }}
                    >
                        {this.props.children}
                    </div>
                </VisibilitySensor>
                <style jsx>
                    {`
                        div {
                            opacity: 0;
                            transition: opacity 1s ease-in-out;
                        }
                    `}
                </style>
            </>
        );
    }
}
