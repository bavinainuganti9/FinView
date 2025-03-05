import SwiftUI
import MetalKit

struct StockMarketView: View {
    var body: some View {
        MetalStockRenderer()
            .frame(width: 300, height: 200)
            .background(Color.black)
    }
}

struct MetalStockRenderer: UIViewRepresentable {
    func makeUIView(context: Context) -> MTKView {
        let view = MTKView()
        view.device = MTLCreateSystemDefaultDevice()
        view.clearColor = MTLClearColor(red: 0, green: 0, blue: 0, alpha: 1)
        return view
    }

    func updateUIView(_ uiView: MTKView, context: Context) { }
}
