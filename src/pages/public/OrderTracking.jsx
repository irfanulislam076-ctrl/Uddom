import { Link } from 'react-router-dom';

export default function OrderTracking() {
  // Mock Order Data
  const orderDetails = {
    orderId: 'UDY-0987654321',
    date: 'April 27, 2026',
    total: 39500,
    paymentMethod: 'Cash on Delivery (COD)',
    status: 'processing', // pending, processing, shipped, delivered
    address: 'Flat 4B, House 12, Road 5, Dhanmondi, Dhaka',
    items: [
      { id: 1, name: 'Premium Wireless Headphones', qty: 2, price: 1500, img: 'https://placehold.co/150x150/f8fafc/334155?text=Audio' },
      { id: 3, name: 'Organic Raw Honey (1kg)', qty: 15, price: 650, img: 'https://placehold.co/150x150/fffbeb/b45309?text=Honey' }
    ]
  };

  // Timeline Steps
  const steps = [
    { id: 1, title: 'Order Placed', desc: 'We have received your order', completed: true },
    { id: 2, title: 'Processing', desc: 'Seller is packing your items', completed: true, current: true },
    { id: 3, title: 'Shipped', desc: 'Handed over to courier', completed: false },
    { id: 4, title: 'Delivered', desc: 'Order delivered to you', completed: false }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12 pt-6 md:pt-10">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* 1. Success Banner */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 md:p-10 text-center mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl md:text-4xl text-green-500">✓</span>
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">Thank you for your order!</h1>
          <p className="text-sm md:text-base text-gray-600 mb-6">Your order has been placed successfully and is now being processed.</p>

          <div className="inline-block bg-gray-50 border border-gray-200 rounded-lg px-6 py-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Order Number</p>
            <p className="text-lg md:text-xl font-bold text-[#ff5722]">{orderDetails.orderId}</p>
          </div>
        </div>

        {/* 2. Order Tracking Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">
          <h2 className="text-base md:text-lg font-bold text-gray-800 mb-6 border-b border-gray-100 pb-3">Track Order Status</h2>

          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-5 left-8 right-8 h-1 bg-gray-200 -z-0"></div>
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute top-4 bottom-4 left-5 w-1 bg-gray-200 -z-0"></div>

            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 relative z-10">
              {steps.map((step, index) => (
                <div key={step.id} className="flex md:flex-col items-center gap-4 md:gap-3 text-center w-full md:w-1/4">
                  {/* Step Circle */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold border-4 text-sm shrink-0 ${
                    step.completed
                      ? 'bg-green-500 border-green-100 text-white'
                      : 'bg-white border-gray-200 text-gray-400'
                  }`}>
                    {step.completed ? '✓' : index + 1}
                  </div>

                  {/* Step Text */}
                  <div className="text-left md:text-center flex-1">
                    <p className={`font-bold text-sm md:text-base ${step.completed || step.current ? 'text-gray-800' : 'text-gray-400'}`}>
                      {step.title}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Order Details Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Items List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-base font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">Order Items</h2>
            <div className="space-y-4">
              {orderDetails.items.map(item => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded border border-gray-200 overflow-hidden shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs md:text-sm font-bold text-gray-800 line-clamp-2">{item.name}</p>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-1">Qty: {item.qty} × ৳{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Billing & Shipping Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">Order Summary</h2>

              <div className="space-y-3 text-xs md:text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">Date:</span>
                  <span>{orderDetails.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">Payment:</span>
                  <span>{orderDetails.paymentMethod}</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-2 mt-2">
                  <span className="font-bold text-gray-800">Total Paid:</span>
                  <span className="font-bold text-[#ff5722] text-base">৳{orderDetails.total.toLocaleString()}</span>
                </div>
              </div>

              <h2 className="text-sm font-bold text-gray-800 mb-2 mt-6">Shipping Address</h2>
              <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded border border-gray-100">
                {orderDetails.address}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <Link to="/account/orders" className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-md font-semibold text-xs md:text-sm transition">
                View All Orders
              </Link>
              <Link to="/" className="flex-1 text-center bg-[#ff5722] hover:bg-[#e64a19] text-white py-2.5 rounded-md font-semibold text-xs md:text-sm transition">
                Continue Shopping
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
