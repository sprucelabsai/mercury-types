import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import unregisterSkillEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/unregisterSkillEmitTarget.schema'

const unregisterSkillEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetAndPayloadSchema  = {
	id: 'unregisterSkillEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: unregisterSkillEmitTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(unregisterSkillEmitTargetAndPayloadSchema)

export default unregisterSkillEmitTargetAndPayloadSchema
