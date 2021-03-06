import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import authenticateEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/authenticateEmitPayload.schema'

const authenticateEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitTargetAndPayloadSchema  = {
	id: 'authenticateEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: authenticateEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(authenticateEmitTargetAndPayloadSchema)

export default authenticateEmitTargetAndPayloadSchema
