import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import unregisterConversationTopicsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/unregisterConversationTopicsEmitPayload.schema'

const unregisterConversationTopicsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitTargetAndPayloadSchema  = {
	id: 'unregisterConversationTopicsEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: unregisterConversationTopicsEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(unregisterConversationTopicsEmitTargetAndPayloadSchema)

export default unregisterConversationTopicsEmitTargetAndPayloadSchema
