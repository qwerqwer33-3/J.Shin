import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Research from '@/pages/Research';
import Publications from '@/pages/Publications';
import Awards from '@/pages/Awards';
import Resume from '@/pages/Resume';
import Contact from '@/pages/Contact';
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <HashRouter>
          <ScrollToTop />        {/* ← 추가 */}
          <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/research" element={<Research />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
-               <Route path="*" element={<NotFound />} />
-               <Route path="*" element={<NotFound />} />
+               <Route path="*" element={<NotFound />} /> {/* 중복 한 줄은 삭제 */}
              </Routes>
            </main>
          </div>
        </HashRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);


// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <ThemeProvider>
//         <HashRouter>
//           <div className="min-h-screen bg-background">
//             <Header />
//             <main className="pt-16">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/research" element={<Research />} />
//                 <Route path="/publications" element={<Publications />} />
//                 <Route path="/awards" element={<Awards />} />
//                 <Route path="/resume" element={<Resume />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="*" element={<NotFound />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//           </div>
//         </HashRouter>
//       </ThemeProvider>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

export default App;