export const Tags = ({ tags }) => {
    return (
        <div className="flex flex-wrap gap-2 mt-4 absolute bottom-0 left-0 p-2">
            {tags.map((tag) => (
                <span key={tag} className="bg-opacity-60 backdrop-blur-sm px-2 py-1 rounded text-sm font-semibold text-white bg-slate-600">
                    {tag}
                </span>
            ))}
        </div>
    );
};