import React from 'react'

const Editing = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Other Skills</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Content Creator</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Photographer</h3>
                        <span className="skills_level">intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Videographer</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills_group">
                <div className="skills_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">STEM Educator</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Graphic Designer</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Blogger</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Editing;