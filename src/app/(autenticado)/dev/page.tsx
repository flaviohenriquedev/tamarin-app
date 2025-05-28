export default function PaginaDev() {

    const columns = ["#", "Name", "Job", "Favorite Color"];

    const data = [
        ["1", "Cy Ganderton", "Quality Control Specialist", "Blue"],
        ["2", "Hart Hagerty", "Desktop Support Technician", "Purple"],
        ["3", "Brice Swyre", "Tax Accountant", "Red"],
    ];

    return (
        // auto-cols-max ---- para que o tamanho das colunas não se extenda automaticamente
        <div className="border rounded overflow-hidden text-sm">
            {/* Cabeçalho */}
            <div className="grid grid-flow-col auto-cols-fr bg-gray-200 font-semibold text-gray-700">
                {columns.map((col, idx) => (
                    <div key={idx} className="p-2 border-r last:border-r-0">
                        {col}
                    </div>
                ))}
            </div>

            {/* Linhas */}
            {data.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="grid grid-flow-col auto-cols-fr border-t"
                >
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className="p-2 border-r last:border-r-0">
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>


    )
}