const ProjectsCard = ({ imgUrl, title, description) => {
    return (
        <div>
            <div className="h-52 md:h-72" style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
                <h5 className="text-white">
                    {title}
                </h5>
                <p className="text-white">
                    {description}
                </p>    
            </div>
        </div>
    )
}

export default ProjectsCard