"use strict";
/* IMPORT */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var unstated_1 = require("unstated");
/* CONTAINER */
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._suspended = false;
        _this._updateSuspended = false;
        return _this;
    }
    Container.prototype.setState = function (updater, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var nextState;
            return __generator(this, function (_a) {
                if (typeof updater === 'function') {
                    nextState = updater(this.state);
                }
                else {
                    nextState = updater;
                }
                if (nextState == null) {
                    if (callback)
                        callback();
                    return [2 /*return*/];
                }
                this.state = Object.assign({}, this.state, nextState);
                this._updateEmit(callback);
                return [2 /*return*/];
            });
        });
    };
    Container.prototype.suspend = function () {
        this._suspended = true;
    };
    Container.prototype.unsuspend = function (callback) {
        if (!this._suspended)
            return;
        this._suspended = false;
        if (this._updateSuspended)
            this._updateEmit(callback);
    };
    Container.prototype._updateEmit = function (callback) {
        this._updateSuspended = this._suspended;
        if (this._suspended)
            return;
        var promises = this._listeners.map(function (listener) { return listener(); });
        Promise.all(promises).then(function () {
            if (callback)
                callback();
        });
    };
    return Container;
}(unstated_1.Container));
exports.Container = Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVoscUNBQW9EO0FBRXBELGVBQWU7QUFFZjtJQUE4Qyw2QkFBb0I7SUFBbEU7UUFBQSxxRUFtREM7UUFoREMsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsS0FBSyxDQUFDOztJQStDM0IsQ0FBQztJQTdDTyw0QkFBUSxHQUFkLFVBQWlCLE9BQWtELEVBQUUsUUFBcUI7Ozs7Z0JBSXhGLElBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFHO29CQUNuQyxTQUFTLEdBQUcsT0FBTyxDQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0wsU0FBUyxHQUFHLE9BQU8sQ0FBQztpQkFDckI7Z0JBRUQsSUFBSyxTQUFTLElBQUksSUFBSSxFQUFHO29CQUN2QixJQUFLLFFBQVE7d0JBQUcsUUFBUSxFQUFHLENBQUM7b0JBQzVCLHNCQUFPO2lCQUNSO2dCQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUUsQ0FBQztnQkFFekQsSUFBSSxDQUFDLFdBQVcsQ0FBRyxRQUFRLENBQUUsQ0FBQzs7OztLQUUvQjtJQUVELDJCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFZLFFBQVM7UUFDbkIsSUFBSyxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUcsT0FBTztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFLLElBQUksQ0FBQyxnQkFBZ0I7WUFBRyxJQUFJLENBQUMsV0FBVyxDQUFHLFFBQVEsQ0FBRSxDQUFDO0lBQzdELENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQWMsUUFBUztRQUVyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV4QyxJQUFLLElBQUksQ0FBQyxVQUFVO1lBQUcsT0FBTztRQUU5QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBRyxFQUFYLENBQVcsQ0FBRSxDQUFDO1FBRWpFLE9BQU8sQ0FBQyxHQUFHLENBQUcsUUFBUSxDQUFFLENBQUMsSUFBSSxDQUFHO1lBQzlCLElBQUssUUFBUTtnQkFBRyxRQUFRLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFSCxnQkFBQztBQUFELENBQUMsQUFuREQsQ0FBOEMsb0JBQWEsR0FtRDFEO0FBSU8sOEJBQVMifQ==