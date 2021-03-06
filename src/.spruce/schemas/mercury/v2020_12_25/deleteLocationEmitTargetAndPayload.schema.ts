import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import deleteLocationTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/deleteLocationTargetPayload.schema'

const deleteLocationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetAndPayloadSchema  = {
	id: 'deleteLocationEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: deleteLocationTargetPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteLocationEmitTargetAndPayloadSchema)

export default deleteLocationEmitTargetAndPayloadSchema
