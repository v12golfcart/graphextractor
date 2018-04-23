(function(scope) {var bg = new Layer({"name":"bg","backgroundColor":"#fff","width":244,"x":-53,"height":149,"constraintValues":null,"blending":"normal","clip":true,"borderStyle":"solid","y":-24});var __layer_0__ = new SVGLayer({"parent":bg,"htmlIntrinsicSize":{"height":100,"width":122},"height":100,"name":".SVGLayer","backgroundColor":null,"opacity":null,"width":122,"x":51,"y":24,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"122\" height=\"100\"><g name=\"Chart\"><path d=\"M 0 0 L 2 0 L 2 100 L 0 100 Z\" transform=\"translate(2 0)\" fill=\"#CCC\" name=\"Rectangle\"><\/path><path d=\"M 0 0 L 120 0 L 120 2 L 0 2 Z\" transform=\"translate(2 98)\" fill=\"#CCC\" name=\"Rectangle\"><\/path><path d=\"M 0 0 L 23 0 L 23 52 L 0 52 Z\" transform=\"translate(12 46)\" fill=\"#1199EE\" name=\"Rectangle\"><\/path><path d=\"M 0 0 L 23 0 L 23 40 L 0 40 Z\" transform=\"translate(51 58)\" fill=\"#1199EE\" name=\"Rectangle\"><\/path><path d=\"M 0 0 L 23 0 L 23 74 L 0 74 Z\" transform=\"translate(90 24)\" fill=\"#1199EE\" name=\"Rectangle\"><\/path><path d=\"M 0 0 L 6 0 L 6 2 L 0 2 Z\" transform=\"translate(0 75)\" fill=\"#CCC\" name=\"Rectangle\"><\/path><path d=\"M 0 0 L 6 0 L 6 2 L 0 2 Z\" transform=\"translate(0 51)\" fill=\"#CCC\" name=\"Rectangle\"><\/path><path d=\"M 0 0 L 6 0 L 6 2 L 0 2 Z\" transform=\"translate(0 28)\" fill=\"#CCC\" name=\"Rectangle\"><\/path><path d=\"M 0 0 L 6 0 L 6 2 L 0 2 Z\" transform=\"translate(0 4)\" fill=\"#CCC\" name=\"Rectangle\"><\/path><\/g><\/svg>","rotation":null});var __layer_1__ = new TextLayer({"parent":bg,"backgroundColor":null,"width":18,"x":32,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"10px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","fontWeight":900,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif","lineHeight":"1.2"}}],"text":"100"}]},"height":12,"constraintValues":{"left":32,"height":12,"centerAnchorX":0.16803278688524589,"width":18,"top":22,"centerAnchorY":0.18791946308724833},"blending":"normal","autoSize":true,"y":22});var __layer_2__ = new TextLayer({"parent":bg,"backgroundColor":null,"width":13,"x":37,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"10px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","fontWeight":900,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif","lineHeight":"1.2"}}],"text":"75"}]},"height":12,"constraintValues":{"left":37,"height":12,"centerAnchorX":0.17827868852459017,"width":13,"top":47,"centerAnchorY":0.35570469798657717},"blending":"normal","autoSize":true,"y":47});var __layer_3__ = new TextLayer({"parent":bg,"backgroundColor":null,"width":13,"x":37,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"10px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","fontWeight":900,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif","lineHeight":"1.2"}}],"text":"50"}]},"height":12,"constraintValues":{"left":37,"height":12,"centerAnchorX":0.17827868852459017,"width":13,"top":null,"centerAnchorY":0.51006711409395977},"blending":"normal","autoSize":true,"y":70});var __layer_4__ = new TextLayer({"parent":bg,"backgroundColor":null,"width":13,"x":37,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"10px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","fontWeight":900,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif","lineHeight":"1.2"}}],"text":"25"}]},"height":12,"constraintValues":{"left":37,"height":12,"centerAnchorX":0.17827868852459017,"width":13,"bottom":43,"top":null,"centerAnchorY":0.67114093959731547},"blending":"normal","autoSize":true,"y":94});var maxY = new Layer({"parent":bg,"name":"maxY","backgroundColor":null,"width":152,"x":54,"height":15,"constraintValues":{"left":null,"height":15,"centerAnchorX":0.53278688524590168,"width":152,"right":38,"top":21,"centerAnchorY":0.1912751677852349},"blending":"normal","clip":false,"borderStyle":"solid","y":21});var __layer_5__ = new SVGLayer({"parent":maxY,"name":".SVGLayer","backgroundColor":"#EE4444","width":117,"strokeWidth":1,"x":1,"htmlIntrinsicSize":{"height":2,"width":117},"rotation":null,"height":2,"fill":"#EE4444","opacity":null,"y":7,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"117\" height=\"2\"><path d=\"M 0 0 L 117 0 L 117 2 L 0 2 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_6__ = new SVGLayer({"parent":maxY,"name":".SVGLayer","backgroundColor":null,"width":22,"stroke":"rgba(204, 204, 204, 1.00)","strokeWidth":1,"x":123,"htmlIntrinsicSize":{"height":13,"width":22},"rotation":null,"height":13,"opacity":null,"y":1,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"22\" height=\"13\"><path d=\"M 0 0 L 22 0 L 22 13 L 0 13 Z\" fill=\"transparent\" name=\"Rectangle\"><\/path><\/svg>"});var inputMaxY = new TextLayer({"parent":maxY,"name":"inputMaxY","backgroundColor":null,"width":18,"x":124,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"10px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif","lineHeight":"1.2"}}],"text":"100"}]},"height":12,"constraintValues":{"left":null,"height":12,"centerAnchorX":0.875,"width":18,"right":10,"top":null,"centerAnchorY":0.53333333333333333},"blending":"normal","autoSize":true,"y":2});var minYX = new Layer({"parent":bg,"name":"minYX","backgroundColor":null,"width":152,"x":54,"height":15,"constraintValues":{"left":null,"height":15,"centerAnchorX":0.53278688524590168,"width":152,"bottom":20,"right":38,"top":null,"centerAnchorY":0.81543624161073824},"blending":"normal","clip":false,"borderStyle":"solid","y":114});var __layer_7__ = new SVGLayer({"parent":minYX,"name":".SVGLayer","backgroundColor":"#EE4444","width":117,"strokeWidth":1,"x":1,"htmlIntrinsicSize":{"height":2,"width":117},"rotation":null,"height":2,"fill":"#EE4444","opacity":null,"y":7,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"117\" height=\"2\"><path d=\"M 0 0 L 117 0 L 117 2 L 0 2 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_8__ = new SVGLayer({"parent":minYX,"name":".SVGLayer","backgroundColor":null,"width":22,"stroke":"rgba(204, 204, 204, 1.00)","strokeWidth":1,"x":123,"htmlIntrinsicSize":{"height":13,"width":22},"rotation":null,"height":13,"opacity":null,"y":1,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"22\" height=\"13\"><path d=\"M 0 0 L 22 0 L 22 13 L 0 13 Z\" fill=\"transparent\" name=\"Rectangle\"><\/path><\/svg>"});var inputMinY = new TextLayer({"parent":minYX,"name":"inputMinY","backgroundColor":null,"width":7,"x":124,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":1,"css":{"fontSize":"10px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif","lineHeight":"1.2"}}],"text":"0"}]},"height":12,"constraintValues":{"left":null,"height":12,"centerAnchorX":0.83881578947368418,"width":7,"right":21,"top":null,"centerAnchorY":0.53333333333333333},"blending":"normal","autoSize":true,"y":2});var x = new SVGLayer({"name":"x","backgroundColor":null,"width":24,"x":-80,"htmlIntrinsicSize":{"height":24,"width":24},"color":"#EE4444","height":24,"constraintValues":null,"blending":"normal","clip":false,"y":-24,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"><\/path><\/svg>"});if(maxY !== undefined){maxY.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|maxY","targetName":"maxY","vekterClass":"FrameNode"}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"hash":"#vekter|__layer_5__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(inputMinY !== undefined){inputMinY.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|inputMinY","targetName":"inputMinY","vekterClass":"TextNode","text":"0"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_2__","vekterClass":"TextNode","text":"75"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"hash":"#vekter|__layer_8__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(x !== undefined){x.__framerInstanceInfo = {"originalFilename":"close","framerClass":"SVGLayer","hash":"#vekter|x","targetName":"x","vekterClass":"SVGNode"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"ShapeGroupNode","framerClass":"SVGLayer"}};if(inputMaxY !== undefined){inputMaxY.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|inputMaxY","targetName":"inputMaxY","vekterClass":"TextNode","text":"100"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_4__","vekterClass":"TextNode","text":"25"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_1__","vekterClass":"TextNode","text":"100"}};if(bg !== undefined){bg.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|bg","targetName":"bg","vekterClass":"FrameNode"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_3__","vekterClass":"TextNode","text":"50"}};if(minYX !== undefined){minYX.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|minYX","targetName":"minYX","vekterClass":"FrameNode"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {bg, maxY, inputMaxY, minYX, inputMinY, x});scope["__vekterVariables"] = ["bg", "maxY", "inputMaxY", "minYX", "inputMinY", "x"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);