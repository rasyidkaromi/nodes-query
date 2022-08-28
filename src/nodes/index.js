import { RootEngine } from "./lib";
import { nodeConfig } from './nodeconfig'
import { resolvePorts } from './rports'
import { resolveNodes } from './rnodes'


const engine = new RootEngine(nodeConfig, resolvePorts, resolveNodes)

export {
    nodeConfig,
    engine
}
