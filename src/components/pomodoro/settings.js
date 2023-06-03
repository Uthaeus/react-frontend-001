
import Controls from "./controls";

function Settings() {

    return (
        <div className="settings-wrapper">
            <div className="settings-item-wrapper">
                <div className="settings-item session-item">
                    <div className="settings-item-display">
                        <p className="settings-item-display-item">25</p>
                    </div>

                    <div className="settings-item-actions">
                        <button className="settings-item-btn session-increment-btn">+</button>
                        <button className="settings-item-btn session-decrement-btn">-</button>
                    </div>
                </div>
            </div>

            <div className="settings-controls-wrapper">
                <div className="controls-indicator-wrapper">
                    <p className="indicator session-indicator" />
                    <p className="current-mode-label">session</p>
                    <p className="indicator break-indicator" />
                </div>
                <Controls />
            </div>

            <div className="settings-item-wrapper">
                <div className="settings-item break-item">
                    <div className="settings-item-actions">
                        <button className="settings-item-btn session-increment-btn">+</button>
                        <button className="settings-item-btn session-decrement-btn">-</button>
                    </div>
                    
                    <div className="settings-item-display">
                        <p className="settings-item-display-item">5</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;