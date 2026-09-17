import React, { useState } from 'react';
import { orderStatusTableData } from '../../data/dashboardData';
import StatusBadge from './StatusBadge';
import { Plus, Search, SlidersHorizontal, ArrowUpDown, Download, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

export default function OrderStatusTable() {
  const [orders, setOrders] = useState(orderStatusTableData.orders);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handleAddOrder = () => {
    setOrders([{
      id: `#${Math.floor(10000 + Math.random() * 90000)}`,
      customer: 'Zainab Noor',
      product: 'Smart Watch Pro',
      price: '$149.00',
      status: 'Processing',
    }, ...orders]);
  };

  const filteredOrders = orders.filter(
    (o) => o.customer.toLowerCase().includes(searchTerm.toLowerCase()) || o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-2xl bg-surface border border-line p-6 shadow-[0_8px_30px_rgba(27,29,40,0.06)] flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-ink">{orderStatusTableData.title}</h2>
            <p className="text-sm font-medium text-muted mt-0.5">{orderStatusTableData.subtitle}</p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-muted absolute left-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search orders…"
                className="bg-canvas border border-line rounded-xl pl-10 pr-4 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-violet transition-colors w-full sm:w-60"
              />
            </div>
            <button className="p-2 rounded-xl bg-canvas border border-line text-muted hover:text-ink hover:bg-line transition-colors cursor-pointer" title="Export">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
          <button 
            onClick={handleAddOrder}
            className="bg-violet text-white rounded-xl px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-violet/90 transition-colors shadow-[0_4px_12px_rgba(108,78,242,0.25)] cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Order</span>
          </button>


          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl bg-canvas border border-line text-muted hover:text-ink hover:bg-line transition-colors cursor-pointer" title="Filter"><Filter className="w-4 h-4" /></button>
            <button className="p-2 rounded-xl bg-canvas border border-line text-muted hover:text-ink hover:bg-line transition-colors cursor-pointer" title="Sort"><ArrowUpDown className="w-4 h-4" /></button>
            <button className="p-2 rounded-xl bg-canvas border border-line text-muted hover:text-ink hover:bg-line transition-colors cursor-pointer" title="Settings"><SlidersHorizontal className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full mb-6">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-line text-xs font-bold text-muted uppercase tracking-wider">
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-sm font-medium text-ink">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-canvas/50 transition-colors">
                  <td className="py-4 px-4 font-bold text-violet">{order.id}</td>
                  <td className="py-4 px-4 text-ink font-semibold">{order.customer}</td>
                  <td className="py-4 px-4 text-muted">{order.product}</td>
                  <td className="py-4 px-4 font-bold text-ink">{order.price}</td>
                  <td className="py-4 px-4">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-8 text-center text-muted text-sm font-medium">No orders found matching "{searchTerm}"</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer: Showing X to Y & Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-line text-xs font-medium text-muted mt-auto">
        <span>Showing 1 to {filteredOrders.length} of {orders.length + 1279} orders</span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${currentPage === 1 ? 'bg-canvas text-muted/40 cursor-not-allowed' : 'bg-canvas text-muted hover:text-ink hover:bg-line cursor-pointer'}`}
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[1, 2, 3, 4].map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-all cursor-pointer ${currentPage === p ? 'bg-violet text-white shadow-[0_4px_12px_rgba(108,78,242,0.3)]' : 'bg-canvas text-muted hover:text-ink hover:bg-line'}`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${currentPage === totalPages ? 'bg-canvas text-muted/40 cursor-not-allowed' : 'bg-canvas text-muted hover:text-ink hover:bg-line cursor-pointer'}`}
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
