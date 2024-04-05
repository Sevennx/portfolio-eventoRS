import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'
import { attendees } from "../data/attendee"


export function AttendeeList() {
    const [search, setSearch] = useState('')
    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3" >
                    <Search className="size-4 text-emerald-300" />
                    <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0" placeholder="Buscar participantes..." />
                </div>
                {search}
            </div>
            <table>
                <thead>
                    <TableRow className='border-b border-white/10'>
                        <TableHeader style={{ width: 48 }}>
                            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                        </TableHeader>
                        <TableHeader >Código</TableHeader>
                        <TableHeader >Participante</TableHeader>
                        <TableHeader >Data de Incrição</TableHeader>
                        <TableHeader >Data de check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {attendees.map((attendee) => {
                        return (
                            <TableRow key={attendee.id}>
                                <TableCell>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/5' />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className='font-semibold text-white'>{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{attendee.createdAt.toISOString()}</TableCell>
                                <TableCell>{attendee.checkedInAt.toISOString()}</TableCell>
                                <TableCell>
                                    <IconButton transparent={true}>
                                        <MoreHorizontal className="size-4" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>

                <tfoot>
                    <TableRow>
                        <TableCell colSpan={3}>
                            Mostrando 10 de 228 itens
                        </TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página 1 de 23</span>
 
                                <div className='flex gap-1.5'>
                                    <IconButton>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </tfoot>
            </table>
        </div>
    )
}
