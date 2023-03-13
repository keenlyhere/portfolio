import { Scroll } from '@react-three/drei';

export default function Projects() {
    return (
        <Scroll html>
            <div className="Projects-container">
                <h1 className="Section-header">
                    Projects
                </h1>
                <div className="Project-card">
                    <img src="https://keenlychung.com/dailymood/dm_02_dailies.gif" alt="Daily Moo'd Dailies Demo" />
                </div>
            </div>
        </Scroll>
    )
}
